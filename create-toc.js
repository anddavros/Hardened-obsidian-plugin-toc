"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToc = exports.getCurrentHeaderDepth = void 0;
const endent_1 = __importDefault(require("endent"));
const obsidian_1 = require("obsidian");
const anchor_markdown_header_1 = __importDefault(require("anchor-markdown-header"));
const getCurrentHeaderDepth = (headings, cursor) => {
    const previousHeadings = headings.filter((heading) => heading.position.end.line < cursor.line);
    if (!previousHeadings.length) {
        return 0;
    }
    return previousHeadings[previousHeadings.length - 1].level;
};
exports.getCurrentHeaderDepth = getCurrentHeaderDepth;
const getSubsequentHeadings = (headings, cursor) => {
    return headings.filter((heading) => heading.position.end.line > cursor.line);
};
const getPreviousLevelHeading = (headings, currentHeading) => {
    const index = headings.indexOf(currentHeading);
    const targetHeadings = headings.slice(0, index).reverse();
    return targetHeadings.find((item, _index, _array) => {
        return item.level == currentHeading.level - 1;
    });
};
const createToc = ({ headings = [] }, cursor, settings) => {
    const currentDepth = (0, exports.getCurrentHeaderDepth)(headings, cursor);
    const subsequentHeadings = getSubsequentHeadings(headings, cursor);
    const includedHeadings = [];
    for (const heading of subsequentHeadings) {
        if (heading.level <= currentDepth) {
            break;
        }
        if (heading.level >= settings.minimumDepth &&
            heading.level <= settings.maximumDepth) {
            includedHeadings.push(heading);
        }
    }
    if (!includedHeadings.length) {
        new obsidian_1.Notice((0, endent_1.default) `
        No headings below cursor matched settings 
        (min: ${settings.minimumDepth}) (max: ${settings.maximumDepth})
      `);
        return;
    }
    const firstHeadingDepth = includedHeadings[0].level;
    const links = includedHeadings.map((heading) => {
        const itemIndication = (settings.listStyle === "number" && "1.") || "-";
        const indent = new Array(Math.max(0, heading.level - firstHeadingDepth))
            .fill("\t")
            .join("");
        const previousLevelHeading = getPreviousLevelHeading(includedHeadings, heading);
        const prefix = `${indent}${itemIndication}`;
        const displayText = heading.heading;
        let linkText;
        if (settings.useMarkdown && settings.githubCompat)
            return `${prefix} ${(0, anchor_markdown_header_1.default)(heading.heading)}`;
        else if (settings.useMarkdown) {
            // For Markdown links (non-GitHub compat), still use standard hyphenated anchors
            linkText = (0, anchor_markdown_header_1.default)(heading.heading);
        }
        else if (typeof previousLevelHeading == "undefined")
            linkText = heading.heading;
        else
            linkText = `${previousLevelHeading.heading}#${heading.heading}`;
        // wikilink format
        if (!settings.useMarkdown)
            return `${prefix} [[#${linkText}|${displayText}]]`;
        // markdown format
        else
            return `${prefix} [${displayText}](#${linkText})`;
    });
    return (0, endent_1.default) `
    ${settings.title ? `${settings.title}\n` : ""}
    ${`${links.join("\n")}\n`}
  `;
};
exports.createToc = createToc;
//# sourceMappingURL=create-toc.js.map
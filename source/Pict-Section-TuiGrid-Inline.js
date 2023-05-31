const libPictSectionTuiGrid = require('pict-section-tuigrid');
const libTuiGrid = require('tui-grid');

class PictSectionTuiGridInline extends libPictSectionTuiGrid
{
	constructor(pFable, pOptions, pServiceHash)
	{
		super(pFable, pOptions, pServiceHash);

		// Connect the inline tuigrid
		this.connectTuiGridPrototype(libTuiGrid);
	}
}

module.exports = PictSectionTuiGridInline;

// Custom column header classes
module.exports.CustomColumnHeaderNone = PictSectionTuiGridInline.CustomColumnHeaderNone;

// Custom editor classes
module.exports.CustomEditorNumber = PictSectionTuiGridInline.CustomEditorNumber;

// Custom formatting functions
module.exports.FormatterTwoDigitNumber = PictSectionTuiGridInline.FormatterTwoDigitNumber;
module.exports.FormatterCurrencyNumber = PictSectionTuiGridInline.FormatterCurrencyNumber;

module.exports.default_configuration = PictSectionTuiGridInline.default_configuration;
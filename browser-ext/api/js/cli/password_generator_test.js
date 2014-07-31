/*
 * *****************************************************************************
 * Copyright (c) 2012, 2013, 2014 Lectorius, Inc.
 * Authors:
 * Vijay Pandurangan (vijayp@mitro.co)
 * Evan Jones (ej@mitro.co)
 * Adam Hilss (ahilss@mitro.co)
 *
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 *     You can contact the authors at inbound@mitro.co.
 * *****************************************************************************
 */

var mitro = mitro || require('./password_generator.js');

/**
@implements mitro.Forge
@constructor
@struct
*/
var MockForge = function() {
};
/** @const */
var NUMBERS = [130,232,244,242,141,216,154,51,125,248,165,59,128,66,123,144,149,246,15,0,219,52,136,33,221,81,188,71,234,134,71,178,186,65,56,229,46,185,143,197,37,202,196,119,243,71,163,116,239,157,79,77,126,211,234,230,120,166,0,138,231,150,191,218,24,1,251,230,76,24,131,90,146,66,83,179,126,228,184,219,27,165,199,223,88,121,177,226,169,134,191,131,245,109,65,178,177,179,171,246,241,242,86,83,220,29,3,84,46,194,140,203,150,153,99,117,67,138,134,123,190,111,246,33,251,218,69,234,226,43,177,168,231,164,141,89,50,110,246,240,230,166,96,93,139,162,241,36,42,17,103,104,22,157,117,211,138,186,243,48,28,145,29,150,114,28,71,1,144,104,226,92,77,120,205,202,68,67,123,24,215,87,193,77,237,63,133,123,219,216,13,39,146,247,110,107,207,214,147,216,101,237,106,227,190,102,133,217,204,218,140,81,21,136,11,156,153,76,18,59,75,118,175,146,123,125,133,3,235,28,96,47,88,157,176,160,92,18,7,15,33,100,40,28,240,159,115,55,49,102,21,214,143,195,1,210,236,62,245,59,13,217,59,110,4,158,131,198,4,18,23,2,237,78,36,249,11,30,125,191,251,197,193,73,118,239,114,133,220,77,160,34,184,120,231,154,96,39,133,160,147,20,221,24,49,70,21,49,9,75,2,224,135,173,185,75,167,239,217,163,54,225,125,105,82,192,19,205,105,149,103,49,229,4,237,114,86,231,80,76,77,113,76,103,142,75,222,5,33,26,70,28,25,127,139,227,213,83,134,66,114,112,158,22,226,139,134,171,4,191,32,244,10,154,145,208,139,57,81,235,71,25,162,120,45,55,198,255,232,123,112,98,146,155,56,79,185,28,145,31,221,51,99,16,151,25,143,236,203,252,28,209,44,229,208,133,151,228,117,155,210,103,115,191,208,206,132,74,144,108,197,60,181,47,196,13,94,113,120,32,90,95,191,47,67,196,94,184,49,31,210,72,240,214,122,232,249,216,1,28,25,246,204,126,7,34,233,237,57,66,26,16,45,215,163,97,168,65,80,155,46,49,216,130,97,150,121,79,80,69,150,234,29,72,226,205,195,105,163,108,74,63,38,200,189,50,65,6,81,119,73,177,154,251,50,123,30,101,79,171,177,199,241,65,197,244,192,192,70,125,46,35,89,21,58,59,90,192,21,22,200,70,41,185,40,175,191,38,129,149,194,82,110,228,201,65,58,177,11,159,30,113,87,129,175,137,233,170,184,255,41,212,38,219,148,147,129,57,45,35,121,61,147,220,126,176,10,140,224,157,214,236,146,240,168,178,116,8,199,241,84,118,129,17,253,194,187,223,52,41,148,233,233,242,212,199,152,83,78,182,226,170,79,84,135,108,28,45,76,38,231,132,41,59,89,27,154,159,83,66,36,111,129,176,59,91,232,58,43,185,191,61,165,77,70,117,8,155,40,15,91,85,96,20,190,249,77,37,63,141,162,80,39,143,30,111,47,245,99,82,80,245,12,81,217,162,180,150,96,135,249,181,222,156,217,240,215,54,3,173,37,24,68,151,19,96,100,2,97,193,2,40,187,115,224,18,67,254,154,44,126,82,20,148,207,108,239,134,81,246,13,105,181,246,58,230,185,226,105,101,157,112,141,119,207,36,181,167,237,32,107,22,185,150,7,163,119,65,56,4,25,234,29,76,90,143,94,149,161,201,248,177,189,215,134,171,159,104,121,215,209,252,158,252,193,251,127,199,180,87,154,229,252,217,109,97,232,22,0,225,177,67,252,99,145,7,89,35,134,159,56,73,103,115,226,161,149,189,126,89,45,184,156,176,180,203,189,240,82,77,213,202,146,145,44,180,57,53,35,43,50,245,223,144,194,27,126,226,240,108,142,106,73,51,123,108,109,64,86,126,106,209,228,165,189,42,239,156,24,239,47,179,214,28,55,170,247,153,93,110,155,90,246,37,112,90,25,253,111,194,56,164,17,79,32,159,26,58,212,75,237,166,167,81,44,127,39,4,172,73,93,68,163,64,57,236,162,171,241,57,138,163,221,44,155,183,73,252,152,30,54,164,76,19,211,188,92,54,197,121,36,252,133,40,159,17,234,127,222,242,33,25,202,237,165,167,142,176,168,201,180,148,224,67,101,123,78,188,35,55,62,13,152,231,115,5,204,213,106,242,255,206,52,136,196,236,180,130,80,230,127,91,115,177,243,106,24,99,232,216,172,124,103,249,197,236,32,167,185,77,67,11,20,158,35,144,184,236,51,8,57,250,101,1,173,36,238,169,207,2,146,190,237,141,92,189,131,160,34,27,33,218,96,253,207,238,193,218,37,156,175,52,150,32,178,253,184,176,4,6,43,28,49,241,196,36,132,111,233,89,164,72,0,16,166,148,153,136,204,38,62,88,195,35,242,225,171,65,93,239,59,167,163,45,77,162,80,77,108,255,155,127,39,162,251,32,68,248,87,205,94,30,40,58,136,101,227,209,171,67,12,205,118,236,12,187,153,141,180,118,138,136,72,105,134,190,72,210,245,161,217,177,220,235,74,249,80,142,123,177,158,76,238,57,180,156,222,105,80,97,135,226,210,148,254,99,137,56,125,78,240,201,157,171,32,240,84,58,241,65,127,195,147,87,45,39,216,56,62,23,160,127,84,34,66,164,180,91,204,109,199,111,106,239,182,102,228,204,160,91,252,208,104,92,136,16,200,70,197,188,202,61,190,3,142,21,156,189,74,214,223,177,242,98,240,45,105,96,37,89,255,140,168,191,0,81,125,138,229,37,249,197,155,144,161,45,42,123,250,131,193,187,34,29,224,77,21,202,219,64,242,190,121,99,28,158,226,211,24,94,23,225,77,146,14,122,102,142,163,54,224,232,208,53,96,44,64,40,163,202,243,93,14,65,200,17,254,77,170,18,164,139,51,179,47,238,141,148,88,79,228,37,234,230,241,109,211,243,86,153,198,118,58,98,119,47,157,23,160,244,183,208,192,217,239,89,50,113,116,203,1,67,55,227,117,117,4,214,85,84,148,55,52,99,161,102,60,80,220,207,39,189,85,75,115,90,106,97,20,18,83,92,43,146,190,185,99,225,207,55,95,130,235,17,225,86,73,99,206,43,164,201,170,49,67,228,0,138,103,242,49,129,172,63,158,216,92,14,138,45,7,141,143,152,148,116,226,122,115,165,166,216,22,109,134,186,131,62,237,78,217,183,171,114,112,145,71,164,217,73,238,156,103,65,211,145,64,186,17,20,172,35,252,129,140,199,6,50,32,3,155,8,245,250,238,108,252,148,134,133,97,55,122,41,224,108,31,213,172,245,15,191,231,132,207,3,122,78,252,142,146,86,6,69,214,104,79,232,255,177,100,219,183,78,56,173,245,45,155,44,243,106,150,218,62,65,145,232,7,32,255,72,208,190,156,250,129,126,244,58,104,222,63,46,203,76,83,59,174,73,148,181,3,163,216,85,173,100,191,73,157,56,112,227,7,133,167,116,227,101,63,100,242,175,190,209,106,244,120,76,56,195,169,83,62,60,76,108,2,31,206,244,223,111,153,215,103,165,129,106,196,45,172,201,164,129,164,123,206,124,56,214,232,99,99,65,194,118,69,184,127,126,246,44,105,10,83,59,49,65,117,196,16,35,20,196,103,93,185,215,71,23,225,76,110,44,178,158,140,227,154,240,77,142,213,174,63,10,161,104,131,234,26,26,103,69,98,99,179,204,160,86,82,175,211,32,72,234,246,64,206,42,106,225,45,170,180,46,138,158,136,226,250,87,79,100,81,9,33,43,109,239,175,99,162,177,35,17,165,56,115,90,254,51,117,155,212,75,123,119,180,130,8,17,169,31,164,235,210,190,84,95,96,194,32,57,99,206,45,30,127,205,106,99,224,129,20,33,122,174,9,81,117,150,12,234,26,64,149,121,89,114,36,47,247,64,227,234,189,219,99,106,69,88,167,245,255,19,9,196,107,30,209,170,225,224,188,71,138,138,65,49,113,29,210,126,108,111,52,108,233,153,44,213,32,160,7,94,31,124,210,178,108,187,44,79,139,145,174,224,226,249,133,24,56,75,55,126,10,210,130,93,162,190,18,81,55,230,146,60,121,152,188,24,206,84,215,117,243,150,104,162,69,51,88,149,139,127,202,111,87,0,160,141,127,159,250,90,97,217,78,14,54,254,110,140,233,225,89,92,56,88,199,104,125,19,136,254,109,212,50,22,126,244,158,190,39,146,116,184,165,0,174,218,247,20,164,66,45,170,116,94,218,151,17,212,48,53,147,71,96,214,193,44,24,0,170,213,19,163,49,58,107,54,15,81,93,233,115,147,16,75,213,143,187,83,110,111,75,173,55,73,187,109,211,210,164,188,118,0,34,189,127,9,120,77,27,159,199,29,42,162,41,164,113,179,244,51,203,103,3,153,172,88,45,206,215,9,8,60,81,229,159,221,244,143,105,150,169,167,107,7,183,175,74,92,212,103,135,133,248,162,240,79,70,148,5,134,238,237,243,170,139,79,208,40,211,41,99,75,58,8,53,159,68,171,129,62,172,181,115,45,93,201,155,42,24,81,249,213,213,229,171,229,62,126,188,59,19,245,193,134,246,51,34,10,208,141,0,169,109,140,255,241,110,152,35,125,22,238,134,86,162,188,169,42,185,178,180,10,25,184,195,49,102,190,167,21,99,89,203,202,73,92,173,227,117,106,115,98,149,156,244,201,185,178,29,166,162,253,218,29,96,114,196,147,135,59,124,213,195,99,210,84,26,59,94,23,30,103,9,146,237,35,67,36,189,13,196,103,36,250,132,183,208,181,165,52,242,23,221,143,233,163,175,18,124,134,31,222,32,84,57,179,155,8,69,237,156,235,89,187,55,175,105,51,83,128,59,60,128,132,116,206,137,171,202,237,170,68,186,87,31,79,171,95,192,168,45,148,91,179,46,200,228,172,52,3,244,86,142,45,218,118,81,216,176,42,35,20,64,54,252,183,159,206,139,46,5,97,101,100,27,255,70,88,96,116,213,39,58,182,127,149,202,16,222,104,154,16,125,110,132,27,105,171,17,251,69,75,100,253,179,75,86,14,168,105,149,20,255,103,62,130,11,154,232,62,76,162,239,35,144,166,232,35,173,113,184,7,115,132,170,36,110,176,44,71,255,183,121,159,189,204,9,123,222,64,208,175,0,46,190,180,99,33,130,53,25,162,231,23,88,246,239,242,169,182,71,164,234,237,9,124,148,131,124,33,195,109,198,135,179,67,5,168,249,18,97,248,216,105,152,144,64,34,188,11,69,21,120,22,92,71,17,138,4,127,19,241,168,215,243,52,45,88,147,65,158,55,77,189,34,178,136,123,255,250,185,72,103,191,218,207,101,45,191,139,130,162,1,246,64,114,214,58,50,226,1,238,248,57,89,210,173,166,127,184,211,19,113,191,66,200,85,247,150,168,125,206,111,174,52,32,3,83,134,186,15,103,24,82,205,44,52,49,158,124,231,253,190,199,206,86,148,146,16,8,230,37,195,164,64,221,69,164,80,22,175,32,150,72,130,227,247,234,77,178,97,70,111,57,111,19,238,89,10,99,237,28,235,109,139,9,9,122,52,224,230,214,207,227,85,131,143,6,250,80,181,171,162,122,249,216,213,96,196,48,158,114,95,148,28,154,132,19,201,99,223,21,159,131,198,35,11,214,191,172,171,247,104,239,63,47,22,249,33,114,117,120,198,146,226,39,21,244,211,172,46,97,244,62,226,174,157,120,65,37,110,34,42,202,21,16,74,136,175,49,93,223,159,27,50,65,240,149,110,90,237,183,214,93,33,70,243,219,62,87,224,10,229,234,52,148,235,11,96,56,50,24,35,201,116,126,17,21,146,196,247,77,255,58,5,12,62,137,36,78,219,223,76,174,220,209,242,209,71,88,250,221,240,43,148,174,56,223,19,250,9,251,139,160,230,73,240,5,190,23,19,101,190,227,247,2,239,61,51,95,176,223,245,61,44,195,1,131,168,226,71,214,166,124,154,93,75,88,87,41,80,124,11,146,235,122,86,178,68,242,106,82,164,71,72,252,35,29,94,213,197,129,245,132,142,161,28,114,236,185,171,150,138,171,62,4,151,51,104,145,153,110,234,64,164,115,99,166,217,107,196,19,179,182,0,44,16,240,102,206,129,146,208,173,232,28,174,81,215,105,77,54,238,239,163,107,190,130,77,91,122,162,46,52,161,137,242,157,109,136,255,39,72,225,148,29,135,19,3,9,36,73,3,229,195,51,199,238,150,51,30,137,195,201,222,187,51,158,116,132,69,14,3,148,226,163,195,166,11,89,152,215,229,201,179,154,108,99,199,150,236,21,131,68,137,162,127,194,54,251,200,162,153,36,18,105,95,23,224,17,14,233,252,123,3,198,85,2,198,227,183,74,225,31,234,144,0,146,137,110,133,40,235,23,60,64,220,75,7,159,50,183,84,62,232,4,118,85,239,226,102,196,107,102,36,99,47,102,34,222,50,85,245,247,12,50,130,157,123,232,22,236,244,106,16,152,228,123,123,98,193,57,122,238,120,171,64,115,107,27,128,46,144,247,50,227,133,166,122,36,83,139,163,10,245,215,99,175,102,30,53,199,122,171,218,42,79,105,6,94,37,227,212,72,113,27,56,64,24,197,250,83,43,162,214,151,142,237,167,248,17,77,39,222,103,136,74,167,253,129,7,225,223,78,165,31,190,230,90,225,10,64,9,147,3,3,231,244,176,194,161,91,205,44,87,28,241,45,165,29,8,8,44,101,230,82,180,50,79,209,239,88,39,89,109,138,182,63,153,162,199,115,171,113,36,75,35,229,189,206,43,144,56,61,56,184,135,94,216,237,83,43,77,146,99,171,119,46,107,36,232,125,44,37,195,147,4,61,225,113,249,171,184,32,204,53,243,154,119,143,50,8,185,65,212,172,177,98,41,172,64,248,176,52,176,89,30,110,151,87,216,101,194,78,109,168,100,136,1,60,11,130,162,26,196,128,26,249,212,112,170,200,24,49,138,13,143,151,243,224,68,88,75,107,139,236,127,14,239,47,32,37,126,79,218,248,32,253,221,168,17,85,203,25,84,179,228,167,2,120,165,244,31,246,120,246,157,83,223,101,165,202,130,30,186,209,53,213,31,18,135,206,155,90,249,193,131,81,42,182,43,139,35,3,82,109,118,29,95,89,219,221,198,92,123,253,56,147,108,173,255,9,28,56,50,18,239,136,111,37,121,226,15,202,110,38,181,203,226,54,180,54,101,236,208,238,47,140,192,218,100,235,16,4,106,126,234,177,116,149,191,81,121,21,91,48,47,119,231,4,64,89,146,52,216,177,225,106,179,195,168,69,155,6,233,208,176,82,214,100,123,67,231,145,67,211,128,200,161,6,240,203,100,86,178,6,204,73,176,6,150,239,197,22,81,158,65,80,247,120,25,121,123,32,243,234,79,125,161,30,62,83,77,53,200,184,113,40,253,213,238,24,17,255,122,141,145,18,37,92,33,93,102,26,39,128,247,134,200,19,30,42,228,186,199,88,204,87,93,66,132,228,142,230,94,88,197,230,230,75,11,107,150,51,110,148,243,48,70,105,248,94,242,220,252,105,183,171,207,44,192,33,220,23,242,56,246,34,243,143,104,148,59,199,56,28,111,33,116,143,163,101,145,36,117,207,86,186,242,143,211,244,39,55,73,166,137,44,134,28,171,162,10,54,195,86,138,14,137,167,190,134,159,185,188,90,225,203,29,194,110,22,246,233,195,121,135,3,8,125,24,63,137,31,34,173,3,67,85,94,10,133,119,32,250,224,24,54,236,249,191,59,216,244,118,149,42,207,97,197,70,155,216,213,175,244,170,17,121,236,238,139,2,73,197,143,206,220,162,12,195,26,84,178,19,22,177,25,186,95,239,208,162,104,210,210,213,229,113,227,95,141,207,108,45,192,124,61,70,203,170,241,201,170,18,15,151,96,223,90,128,105,4,27,73,81,32,120,54,141,80,144,100,140,162,175,204,57,176,25,56,80,174,216,74,48,122,140,161,202,44,118,5,133,46,82,231,121,244,115,228,79,185,130,248,201,236,184,118,167,122,138,67,245,214,64,200,102,123,112,179,209,116,72,37,149,165,18,7,194,153,89,113,162,65,67,4,155,86,15,95,193,214,234,53,177,111,15,91,105,11,82,74,114,30,109,182,162,77,198,130,67,185,244,132,178,51,30,86,108,227,244,213,203,157,67,171,26,74,232,59,183,85,172,222,74,231,17,100,39,154,141,245,155,28,41,12,120,211,217,159,152,147,36,182,177,181,141,114,143,45,170,177,188,128,215,106,245,67,97,68,64,221,93,115,124,186,25,149,42,166,75,125,191,233,138,206,100,237,212,64,44,29,45,238,196,203,226,149,65,137,159,8,154,112,109,197,188,35,43,116,68,252,90,231,227,74,169,252,223,245,118,205,124,233,203,75,60,191,9,221,198,27,190,35,114,175,202,153,26,237,194,112,86,119,242,194,117,1,78,115,33,87,176,96,66,83,11,224,106,110,167,53,48,43,210,115,86,127,211,250,245,122,150,168,170,135,161,30,139,65,68,13,62,53,37,238,201,139,16,232,138,141,9,248,150,200,20,167,10,200,164,25,78,236,2,130,235,28,253,56,209,249,124,234,109,31,229,162,109,135,249,112,146,238,102,16,140,133,45,88,27,78,6,242,174,147,46,195,92,242,38,208,218,172,255,46,23,197,117,20,128,127,169,0,38,6,60,13,226,230,167,149,112,61,47,168,35,211,2,236,92,252,202,191,15,88,236,130,107,91,186,223,198,36,212,254,14,100,173,41,170,189,214,137,162,240,70,118,20,206,141,80,113,62,18,214,215,106,222,34,207,160,28,5,100,206,189,120,68,42,174,93,176,192,70,132,125,72,136,71,229,43,186,72,188,208,189,51,111,234,226,47,52,20,155,215,20,70,87,75,236,30,96,154,152,244,78,58,96,252,55,71,190,110,76,17,95,44,205,118,193,122,177,139,211,111,7,243,42,184,220,130,151,239,206,99,147,13,214,216,175,109,128,37,224,193,130,158,48,103,68,63,67,41,29,160,83,183,86,122,110,202,43,208,107,165,212,225,17,72,203,204,155,201,105,113,7,2,81,202,29,11,162,251,192,204,0,53,35,185,231,22,136,55,54,229,211,154,190,101,215,155,172,224,225,210,108,91,226,120,138,164,177,217,172,12,34,48,6,202,19,110,130,77,8,142,133,87,109,195,214,213,233,48,218,107,54,23,163,74,113,150,53,117,104,86,187,107,45,5,218,32,113,218,70,163,87,13,169,48,39,252,103,139,35,137,86,216,106,187,11,85,33,180,112,199,124,60,66,199,158,246,28,103,217,18,35,250,143,90,208,152,18,190,118,145,53,198,8,32,175,22,230,207,142,2,59,234,175,51,33,45,99,131,166,148,85,196,139,134,38,61,219,241,52,237,226,88,135,244,150,142,49,174,50,144,57,37,111,83,61,103,154,214,155,5,162,159,215,111,254,252,254,96,20,103,6,7,248,223,121,248,150,224,66,54,207,109,67,204,88,126,115,235,208,248,82,142,70,208,210,146,10,60,4,36,181,88,205,184,184,32,193,63,226,238,96,3,171,232,4,220,6,131,174,122,11,210,32,242,231,183,160,77,155,1,231,147,246,209,255,3,18,240,19,234,131,38,25,231,134,64,164,44,23,249,153,153,192,96,210,173,215,69,58,90,84,15,9,240,79,85,75,210,236,154,170,101,137,177,107,188,189,148,59,80,218,15,255,228,168,112,213,138,50,199,179,95,236,169,158,200,6,109,84,88,254,155,26,118,153,209,228,226,175,50,85,4,224,98,9,167,219,222,166,89,251,226,35,188,51,75,221,60,108,57,185,59,36,182,64,108,250,237,181,94,171,172,243,33,211,244,70,122,108,230,162,47,62,67,101,214,28,171,59,195,175,47,114,5,51,242,226,8,50,152,106,73,197,225,162,15,138,183,203,254,49,94,148,182,79,161,254,169,116,142,11,218,252,153,35,105,184,44,17,130,3,166,46,91,227,74,67,88,154,132,31,21,171,64,224,251,156,152,187,51,210,21,48,71,134,129,163,174,126,54,135,32,36,33,235,189,186,129,119,140,198,138,241,211,1,15,75,2,122,82,248,205,69,153,83,1,245,3,27,33,206,189,48,17,144,139,113,200,221,72,247,213,214,245,177,87,14,99,232,0,90,49,230,157,17,29,209,43,97,119,159,191,61,155,186,79,105,99,78,231,44,215,60,223,137,116,255,213,248,77,126,4,17,10,159,223,211,238,142,215,12,241,138,196,28,179,246,134,15,170,54,90,33,118,74,29,102,1,248,162,102,47,58,225,147,209,69,4,130,25,70,118,139,126,57,210,186,244,122,104,127,186,253,229,10,183,116,92,151,232,128,72,126,28,50,209,138,249,189,112,172,63,13,115,252,158,152,56,77,235,50,106,18,56,140,234,190,17,174,5,52,51,142,17,239,155,115,76,4,45,5,96,87,31,202,134,172,19,205,147,21,209,165,44,225,134,198,178,163,6,117,19,202,164,164,165,44,36,233,116,135,128,163,215,97,5,170,184,43,187,231,89,213,154,17,58,222,169,75,243,177,149,150,163,229,144,65,101,28,5,118,54,83,132,142,216,53,255,29,217,192,149,7,29,113,47,213,184,6,208,56,222,178,190,172,7,127,4,54,205,175,101,3,131,46,59,45,218,53,158,115,244,150,27,75,86,63,96,246,31,114,70,175,62,51,82,154,235,87,104,32,247,241,42,181,36,177,124,210,230,91,95,188,19,75,47,87,15,89,115,165,11,106,241,91,13,122,25,229,157,215,198,132,76,219,163,196,216,25,255,238,110,137,108,13,98,103,86,57,67,30,192,231,210,185,181,188,132,186,96,149,49,35,195,22,1,231,223,99,78,31,216,72,111,46,80,25,168,129,215,47,99,80,99,135,201,64,160,239,146,31,7,62,248,195,101,141,249,203,131,144,158,210,223,101,179,109,164,13,209,224,125,127,59,178,74,19,49,66,184,239,187,187,183,91,139,144,34,80,181,104,161,252,246,116,88,204,191,209,152,211,209,23,84,196,5,128,67,105,148,173,230,182,35,181,92,138,136,6,79,174,5,43,177,5,6,111,248,255,36,214,48,75,50,211];

MockForge.prototype.getRandomByte = function() {
  return NUMBERS.pop();
};

describe('mitro.generatePassword', function() {
  it('generates default settings', function() {
    var mockForge = new MockForge();
    var pwd = mitro.generatePassword(mockForge, null);
    // TODO: actually check the requirements instead of the string?
    expect(pwd).toBe('dyx5g#Bg');
  });
});

// TODO: add these tests
// check custom requirements
// pwdlength 0 should be rejected
// check min > max
// check too many  numbers / symbols (not enough entropy) is rejected
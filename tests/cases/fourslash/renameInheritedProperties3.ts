﻿/// <reference path='fourslash.ts'/>

//// interface interface1 extends interface1 {
////    [|propName|]: string;
//// }
////
//// var v: interface1;
//// v.[|propName|];

let ranges = test.ranges();
verify.assertHasRanges(ranges);
for (let range of ranges) {
    goTo.position(range.start);
    verify.renameLocations(/*findInStrings*/ false, /*findInComments*/ false);
}
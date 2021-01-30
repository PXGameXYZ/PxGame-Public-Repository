/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


import run from './run';
import clean from './clean';
import copy from './copy';
import minifyCss from './minifyCss';

/**
 * Compiles the project from source files into a distributable
 * format and copies it to the output (build) folder.
 */
async function prebuild() {
  await run(clean);
  await run(copy);
  await run(minifyCss);
}

export default prebuild;
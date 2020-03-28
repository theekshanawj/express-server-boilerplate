const { join } = require('path');
import packageJson from '../package';

// From the built source code
require(join(process.cwd(), 'dist', packageJson.config["app-name"]));
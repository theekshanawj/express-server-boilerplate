const { join } = require('path');
import packageJson from '../package';
require('dotenv').config();

// Started from /src directory
require(join(process.cwd(), 'src', packageJson.config["app-name"]));

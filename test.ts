import { expectType } from "ts-expect";

import * as Types from "./src/index";

expectType<string>(Types.VERSION);

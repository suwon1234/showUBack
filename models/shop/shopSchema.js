import { model, Schema } from "mongoose"

const shopSchema = new Schema();

export default model("Shop", shopSchema, "shop");
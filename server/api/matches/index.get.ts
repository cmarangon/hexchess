import Match from "../../../models/Match";

export default defineEventHandler(async (event) => {
    return await Match.find();
});

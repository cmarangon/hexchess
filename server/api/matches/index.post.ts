import Match from "../../../models/Match";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    return await new Match({
        date: new Date().toISOString(),
        mode: body.mode,
    }).save();
});

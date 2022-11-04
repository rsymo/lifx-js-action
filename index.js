const core = require('@actions/core');
const github = require('@actions/github');

{
    async () => {
        try {
            core.notice("calling our action");
        } catch (error) {
            core.setFailed(error.message);
        }
    }
}();
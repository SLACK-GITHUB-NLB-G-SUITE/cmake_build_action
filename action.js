const { execFileSync } = require('child_process');

const core = require('@actions/core');

module.exports = class Action
{
    constructor()
    {
        this._executors = new Array();
    }

    run()
    {
        try 
        {
            for(const executor of this._executors)
            {
                executor.execute(execFileSync);
            }
        } 
        catch (error)
        {
            core.info(error.message);
            core.setFailed(error.message);
        }
    }

    addExecutor(executor)
    {
        this._executors.push(executor);  
    }
}

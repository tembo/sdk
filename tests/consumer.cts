import Tembo = require('@tembo-io/sdk');

const client = new Tembo.Tembo({ apiKey: 'typecheck-only' });
void client.sessions.retrieve('typecheck-only');

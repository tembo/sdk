import assert from 'node:assert/strict';
import Tembo from '../dist/esm/index.js';

if (!process.env.TEMBO_API_KEY)
  throw new Error('Set TEMBO_API_KEY to a dev API key; browser login is not sufficient.');
const client = new Tembo({
  apiKey: process.env.TEMBO_API_KEY,
  baseURL: 'https://internal.tembo-development.com/public-api',
  maxRetries: 0,
  timeout: 15000,
});
const response = await client.models.list({ limit: '1' });
assert.ok(response && typeof response === 'object');
console.log('Authenticated dev models.list succeeded. No write endpoints were called.');

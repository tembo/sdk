// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Tembo from '@tembo-io/sdk';

const client = new Tembo({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource task', () => {
  // Prism tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.task.create({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.task.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.task.list({ limit: 10, page: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Tembo.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('search: only required params', async () => {
    const responsePromise = client.task.search({ q: 'authentication bug' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('search: required and optional params', async () => {
    const response = await client.task.search({
      q: 'authentication bug',
      limit: 10,
      page: 1,
    });
  });
});

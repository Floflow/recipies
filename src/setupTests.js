import { Server } from './test/server/test-server';

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

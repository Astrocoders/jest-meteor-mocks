const { jest } = global

exports.templating = {
  onCreated: jest.fn(),
  onRendered: jest.fn(),
  onDestroyed: jest.fn(),
  helpers: jest.fn(),
  events: jest.fn(),
}

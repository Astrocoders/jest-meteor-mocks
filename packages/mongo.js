exports.Mongo = {
  Collection: jest
    .fn()
    .mockImplementation(() => ({
      allow: jest.fn(),
      deny: jest.fn(),
      attachSchema: jest.fn(),
    }))
}

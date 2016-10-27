const { jest } = global

const SimpleSchema = jest.fn()
SimpleSchema.validate = jest.fn()

exports.SimpleSchema = SimpleSchema

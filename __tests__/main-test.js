import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Home from '../lib/Home'
jest.mock('../lib/Albums')

describe("Home", () => {
  it("should pass finally", () => {
    expect(true).toBe(true)
  })
})

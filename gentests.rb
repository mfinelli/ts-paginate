#!/usr/bin/env ruby
# frozen_string_literal: true

require 'pagy'

puts 'import { expect, test } from "vitest";'
puts 'import { paginate } from "./index";'
puts ''
puts 'test("pagination", () => {'

(1..12).each do |p|
  (p..12).each do |c|
    s = Pagy.new(count: c, items: 1, page: p).series
    puts "  expect(paginate(#{c}, #{p})).toStrictEqual(#{s.map do |v|
      if v == :gap
        '...'
      else
        # to_i because "current" is a string in pagy
        v.to_i
      end
    end});"
  end
end

puts '});'

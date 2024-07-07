#!/usr/bin/env ruby
# frozen_string_literal: true

require 'pagy'

(1..10).each do |p|
  (p..10).each do |c|
    s = Pagy.new(count: c, items: 1, page: p, size: [1, 1, 1, 1]).series
    puts "expect(paginate(#{c}, #{p})).toStrictEqual(#{s.map do |v|
      if v == :gap
        '...'
      else
        # to_i because "current" is a string in pagy
        v.to_i
      end
    end});"
  end
end

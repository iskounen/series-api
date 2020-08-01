require 'test_helper'

class SeriesTest < ActiveSupport::TestCase
  test 'should not save series without title' do
    series = Series.new
    assert_not series.save, 'Saved the series without a title'
  end
end

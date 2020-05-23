class Book < ApplicationRecord
  belongs_to :series
  has_one_attached :archive
end

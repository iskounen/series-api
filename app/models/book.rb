class Book < ApplicationRecord
  belongs_to :series
  has_one_attached :archive

  def processed?
    last_processed_at != nil
  end
end

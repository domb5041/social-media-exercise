class User < ApplicationRecord
  has_many :posts, dependent: :destroy
  has_many :comments, dependent: :destroy

  has_one_attached :image, dependent: :destroy

  validates :firstname, presence: true
  validates :lastname, presence: true
end

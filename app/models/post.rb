POST_STATES = {
  draft: 'draft',
  published: 'published'
}

class Post < ApplicationRecord
  belongs_to :user

  has_one_attached :image, dependent: :destroy
  has_many :comments, dependent: :destroy

  validates :body, presence: true
  validates :body, presence: true
  validates :image, content_type: [:png, :jpg, :jpeg]

  attribute :state, :string, default: POST_STATES[:draft]
  validates :state, inclusion: {
    in: POST_STATES.values,
    message: '%{value} is not a valid state'
  }
end

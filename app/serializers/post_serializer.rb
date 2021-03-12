class PostSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :body, :state, :image_url, :updated_at, :created_at

  def image_url
    return unless self.object.image.attached?
    Rails.application.routes.url_helpers.rails_blob_path(self.object.image, only_path: true)
  end
end

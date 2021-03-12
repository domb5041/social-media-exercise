class UserSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :image_url, :updated_at, :created_at

  def image_url
    return unless self.object.image.attached?
    Rails.application.routes.url_helpers.rails_blob_path(self.object.image, only_path: true)
  end
end

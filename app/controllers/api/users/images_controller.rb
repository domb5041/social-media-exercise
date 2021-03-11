class Api::Users::ImagesController < ApiController
  def create
    if user.image.attach(params[:image])
      head :created
    else
      head :bad_request
    end
  end

  def destroy
    return head :not_found unless user.image.attached?

    user.image.purge
    if user.image.attached?
      return head :interval_server_error
    end

    head :ok
  end

  private

  def user
    @user ||= User.find(params[:user_id])
  end
end

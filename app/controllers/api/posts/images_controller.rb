class Api::Posts::ImagesController < ApiController
  def create
    if post.image.attach(params[:image])
      head :created
    else
      head :bad_request
    end
  end

  def destroy
    return head :not_found unless post.image.attached?

    post.image.purge
    if post.image.attached?
      return head :interval_server_error
    end

    head :ok
  end

  private

  def post
    @post ||= Post.find(params[:post_id])
  end
end

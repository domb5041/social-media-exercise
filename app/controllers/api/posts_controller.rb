class Api::PostsController < ApiController
  def index
    posts = Post.paginate(pagination_params)

    render json: {
      posts: posts,
      metadata: {
        page: pagination_params[:page],
        per_page: posts.per_page,
        total_pages: posts.total_pages,
        total_entries: posts.total_entries
      }
    }, status: :ok
  end

  def show
    post = Post.find(params[:id])

    render json: { post: post }, status: :ok
  end

  def create
    post = Post.new(post_params)

    if post.save
      render json: { post: post }, status: :created
    else
      render json: { error: post.errors.full_messages }, status: :bad_request
    end
  end

  def update
    post = Post.find(params[:id])

    if post.update(post_params)
      render json: { post: post }, status: :ok
    else
      render json: { error: post.errors.full_messages }, status: :bad_request
    end
  end

  def destroy
    post = Post.find(params[:id])

    if post.destroy
      head :ok
    else
      render json: { error: post.errors.full_messages }, status: :bad_request
    end
  end

  private

  def post_params
    params.require(:post).permit(:body, :state, :user, :user_id)
  end
end

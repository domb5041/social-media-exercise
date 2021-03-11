class Api::Posts::CommentsController < ApiController
  def index
    comments = post.comments.paginate(pagination_params)

    render json: {
      comments: comments,
      metadata: {
        page: pagination_params[:page],
        per_page: comments.per_page,
        total_pages: comments.total_pages,
        total_entries: comments.total_entries
      }
    }, status: :ok
  end

  def show
    comment = post.comments.find(params[:id])

    render json: { comment: comment }, status: :ok
  end

  def create
    comment = post.comments.create(comment_params)

    if comment.valid?
      render json: { comment: comment }, status: :created
    else
      render json: { error: comment.errors.full_messages }, status: :bad_request
    end
  end

  def update
    comment = post.comments.find(params[:id])

    if comment.update(comment_params)
      render json: { comment: comment }, status: :ok
    else
      render json: { error: comment.errors.full_messages }, status: :bad_request
    end
  end

  def destroy
    comment = post.comments.find(params[:id])

    if comment.destroy
      head :ok
    else
      render json: { error: comment.errors.full_messages }, status: :bad_request
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :user_id)
  end

  def post
    @post ||= Post.find(params[:post_id])
  end
end

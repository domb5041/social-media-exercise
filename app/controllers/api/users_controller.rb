class Api::UsersController < ApiController
  def index
    users = User.paginate(pagination_params)

    render json: {
      users: users,
      metadata: {
        page: pagination_params[:page],
        per_page: users.per_page,
        total_pages: users.total_pages,
        total_entries: users.total_entries
      }
    }, status: :ok
  end

  def show
    user = User.find(params[:id])

    render json: { user: user }, status: :ok
  end

  def create
    user = User.new(user_params)

    if user.save
      render json: { user: user }, status: :created
    else
      render json: { error: user.errors.full_messages }, status: :bad_request
    end
  end

  def update
    user = User.find(params[:id])

    if user.update(user_params)
      render json: { user: user }, status: :ok
    else
      render json: { error: user.errors.full_messages }, status: :bad_request
    end
  end

  def destroy
    user = User.find(params[:id])

    if user.destroy
      head :ok
    else
      render json: { error: user.errors.full_messages }, status: :bad_request
    end
  end

  private

  def user_params
    params.require(:user).permit(:firstname, :lastname)
  end
end

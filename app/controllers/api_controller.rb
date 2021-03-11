class ApiController < ApplicationController
  skip_before_action :verify_authenticity_token
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActionController::ParameterMissing, with: :parameter_missing

  protected

  def record_not_found(exception)
    render json: { error: exception.message }, status: :not_found
  end

  def parameter_missing(exception)
    render json: { error: exception.message }, status: :bad_request
  end

  private

  def pagination_params
    @pagination_params ||= {
      page: (params[:page] || 1).to_i,
      per_page: (params[:per_page] || 10).to_i
    }
  end
end

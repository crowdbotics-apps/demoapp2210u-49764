import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_nutritionplan_list = createAsyncThunk(
  "nutritionPlans/api_v1_nutritionplan_list",
  async payload => {
    const response = await apiService.api_v1_nutritionplan_list(payload)
    return response.data
  }
)
export const api_v1_nutritionplan_create = createAsyncThunk(
  "nutritionPlans/api_v1_nutritionplan_create",
  async payload => {
    const response = await apiService.api_v1_nutritionplan_create(payload)
    return response.data
  }
)
export const api_v1_nutritionplan_retrieve = createAsyncThunk(
  "nutritionPlans/api_v1_nutritionplan_retrieve",
  async payload => {
    const response = await apiService.api_v1_nutritionplan_retrieve(payload)
    return response.data
  }
)
export const api_v1_nutritionplan_update = createAsyncThunk(
  "nutritionPlans/api_v1_nutritionplan_update",
  async payload => {
    const response = await apiService.api_v1_nutritionplan_update(payload)
    return response.data
  }
)
export const api_v1_nutritionplan_partial_update = createAsyncThunk(
  "nutritionPlans/api_v1_nutritionplan_partial_update",
  async payload => {
    const response = await apiService.api_v1_nutritionplan_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_nutritionplan_destroy = createAsyncThunk(
  "nutritionPlans/api_v1_nutritionplan_destroy",
  async payload => {
    const response = await apiService.api_v1_nutritionplan_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const nutritionPlansSlice = createSlice({
  name: "nutritionPlans",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_nutritionplan_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_nutritionplan_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_nutritionplan_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_nutritionplan_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_nutritionplan_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_nutritionplan_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_nutritionplan_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_nutritionplan_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_nutritionplan_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_nutritionplan_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_nutritionplan_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_nutritionplan_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_nutritionplan_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        api_v1_nutritionplan_partial_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_nutritionplan_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_nutritionplan_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_nutritionplan_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_nutritionplan_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_nutritionplan_list,
  api_v1_nutritionplan_create,
  api_v1_nutritionplan_retrieve,
  api_v1_nutritionplan_update,
  api_v1_nutritionplan_partial_update,
  api_v1_nutritionplan_destroy,
  slice: nutritionPlansSlice
}

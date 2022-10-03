export const getDates = async (tipo_documento = 'ruc', numero) => {
  try {
    const res = await fetch(
      `https://dniruc.apisperu.com/api/v1/${tipo_documento}/${numero}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImkxOTIwNjI3QGNvbnRpbmVudGFsLmVkdS5wZSJ9.w51cYP9KtRrzbnBfU8mvnVrZE_vOpNNqTz8yLDq7U0Q`,
    )
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

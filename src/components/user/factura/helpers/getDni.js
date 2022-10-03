export const getDni = async (dniNumber) => {
  try {
    const res = await fetch(
      `https://dniruc.apisperu.com/api/v1/dni/${dniNumber}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImNvcm5lam83NThAZ21haWwuY29tIn0.dqcLfsCm7tzOvVrKvgs1O436kjaDmTl94aIu8nzU7ZI`,
    )
    const data = await res.json()
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}

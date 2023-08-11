import { useEffect, useState } from 'react'

export const useHttp = (apiFn, params) => {
	const [data, setData] = useState([])
	useEffect(() => {
		apiFn(params).then(res => setData(res))
	}, [params])
	return [data, setData]
}

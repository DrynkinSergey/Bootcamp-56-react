import { useDispatch, useSelector } from 'react-redux'
import { loginThunk } from '../redux/Auth/operations'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { selectIsLoggedIn, selectUser } from '../redux/Auth/selectors'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { styled } from 'styled-components'
//HOC - High Order Component

export const Login = () => {
	const location = useLocation()
	console.log(location)
	const isLoggedIn = useSelector(selectIsLoggedIn)
	const { name } = useSelector(selectUser)

	const dispatch = useDispatch()
	const navigate = useNavigate()

	if (isLoggedIn) {
		toast.success(`Welcome back, ${name}`)
		return <Navigate to={location.state?.from || '/'} />
	}

	return (
		<section className='flex flex-col gap-4 mx-auto min-h-[80vh] items-center justify-center mt-4 '>
			<div className='border-2 border-black rounded-lg shadow-md px-4 py-6'>
				<h1 className='mx-auto'>LOGIN</h1>
				<Formik
					onSubmit={values => {
						dispatch(loginThunk(values))
					}}
					initialValues={{ password: '', email: '' }}
					validationSchema={Yup.object({
						password: Yup.string().max(10, 'Must be less then 10 symbols').required('Required!'),
						email: Yup.string().email('Invalid email address').required('Required!'),
					})}
				>
					<Form className='mx-auto flex flex-col gap-4'>
						<Field
							className='px-4 text-2xl   border-2 border-black'
							placeholder='Enter your login....'
							type='text'
							name='email'
						/>
						<ErrorMessage name='email' className='text-red-500' component='h1' />

						<Field
							placeholder='Enter your pass....'
							className='px-4 text-2xl   border-2 border-black'
							type='password'
							name='password'
						/>
						<ErrorStyled name='password' component='span' />

						<div>
							<button type='submit' className='border-2 border-black rounded-md w-1/2  px-4 py-2'>
								LOGIN
							</button>
						</div>
					</Form>
				</Formik>
			</div>
		</section>
	)
}

const ErrorStyled = styled(ErrorMessage)`
	color: blue;
	font-size: 2rem;
`

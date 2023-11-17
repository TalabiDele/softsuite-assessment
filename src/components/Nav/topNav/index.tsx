import { GoHomeFill } from 'react-icons/go'
import { TbChevronDown } from 'react-icons/tb'
import './style.scss'
import { CiSearch } from 'react-icons/ci'
import { HiBell } from 'react-icons/hi'
import user from '../../../assets/user.png'

const TopNav = () => {
	return (
		<div className='top_container'>
			<div className='top_wrapper'>
				<div className='drop_card'>
					<div className='drop_content'>
						<GoHomeFill />
						<div className=''>
							<p className=''>Change Organization</p>
							<h3>PaperSoft Limited</h3>
						</div>
					</div>
					<TbChevronDown className='chev_icon' />
				</div>

				<div className='form'>
					<form action=''>
						<input type='text' placeholder='Search for anything...' />
						<button>
							<CiSearch />
						</button>
					</form>
				</div>
			</div>

			<div className='user_details'>
				<div className='icon_bell'>
					<HiBell />
					<div className='dot'></div>
				</div>
				<div className='user'>
					<img src={user} alt='' />
					<div>
						<p className='name'>Henry Okoro</p>
						<p className='role'>Payroll Manager</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TopNav

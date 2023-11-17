import logo from '../../../assets/softsuite.png'
import { TbChevronDown, TbSwitch3 } from 'react-icons/tb'
import './style.scss'
import { BiSolidCategoryAlt, BiSolidChart } from 'react-icons/bi'
import { PiTreeStructureFill } from 'react-icons/pi'
import { IoSettingsSharp } from 'react-icons/io5'
import { useLocation } from 'react-router'
import { FaUsers } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { HiOutlineLogout } from 'react-icons/hi'
import { useState } from 'react'
import { FaCheck } from 'react-icons/fa6'

const SideNav = () => {
	const [isSwitch, setIsSwitch] = useState<boolean>(false)
	const [isActivity, setIsActivity] = useState<boolean>(false)
	const [isSetup, setIsSetup] = useState<boolean>(false)
	const [isPayrol, setIsPayrol] = useState<boolean>(false)

	const location = useLocation()

	return (
		<div className='container'>
			<div className=''>
				<img src={logo} alt='' />

				<div className='nav_item' onClick={() => setIsSwitch(!isSwitch)}>
					<div className='item'>
						<TbSwitch3 className='switch_icon' />
						<div className=''>
							<p className=''>Switch Module</p>
							<h3>Payroll Management</h3>
						</div>
					</div>
					<TbChevronDown className='chev_icon' />
				</div>

				{isSwitch && (
					<div className='dropDown'>
						<div className='drop_item'>
							<div className=''></div>
							<p className=''>System Administration</p>
						</div>
						<div className='drop_item'>
							<div className=''></div>
							<p className=''>People Management</p>
						</div>
						<div className='drop_item'>
							<div className=''></div>
							<p className=''>Payroll Management</p>
						</div>
						<div className='drop_item'>
							<FaCheck />
							<p className=''>Self Serice</p>
						</div>
					</div>
				)}

				<div className='nav_link'>
					<BiSolidCategoryAlt />
					<p className=''>Dashboard</p>
				</div>

				<div
					className='nav_link drop_down'
					onClick={() => setIsActivity(!isActivity)}
				>
					<div className='flex'>
						<BiSolidChart />
						<p className=''>Payroll Activities</p>
					</div>
					<TbChevronDown className='chev_icon' />
				</div>

				{isActivity && (
					<div className='box_dropdown'>
						<p className=''>Payroll Run</p>
						<p className=''>Payroll Reversal</p>
						<p className=''>Payroll History</p>
						<p className=''>Payroll Lock</p>
						<p className=''>Payroll Payslip</p>
						<p className=''>Payroll Log</p>
						<p className=''>Payroll Approval</p>
					</div>
				)}

				<div className='nav_link'>
					<PiTreeStructureFill className='tree' />
					<p className=''>Salary Structure</p>
				</div>

				<div
					className={
						location.pathname === '/'
							? 'active drop_down'
							: 'nav_link drop_down'
					}
					onClick={() => setIsSetup(!isSetup)}
				>
					<div className='flex'>
						<IoSettingsSharp />
						<p className=''>Element Setup</p>
					</div>
					<TbChevronDown className='chev_icon' />
				</div>

				{isSetup && (
					<div className='setup_dropdown'>
						<p className={location.pathname === '/' ? 'active_p' : ''}>
							Elements
						</p>
						<p className=''>Balances</p>
					</div>
				)}

				<div className='nav_link'>
					<FaUsers />
					<p className=''>Employees</p>
				</div>

				<div className='line'></div>

				<div
					className='nav_link drop_down'
					onClick={() => setIsPayrol(!isPayrol)}
				>
					<div className='flex'>
						<IoSettingsSharp />
						<p className=''>Payroll Settings</p>
					</div>
					<TbChevronDown className='chev_icon' />
				</div>

				{isPayrol && (
					<div className='box_dropdown'>
						<p className=''>Payrol Options</p>
						<p className=''>Deduction Account Setup</p>
						<p className=''>Variation Portal Period</p>
						<p className=''>Paygroup Setup</p>
						<p className=''>Tax Setup</p>
					</div>
				)}

				<div className='nav_link'>
					<FaUser />
					<p className=''>My Account</p>
				</div>

				<div className='nav_link'>
					<HiOutlineLogout />
					<p className=''>Logout</p>
				</div>
			</div>
		</div>
	)
}

export default SideNav

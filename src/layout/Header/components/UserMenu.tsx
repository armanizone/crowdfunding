import React from 'react'
import { Button, Drawer, Menu } from '@mantine/core'
import { BiData } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import { GrPowerShutdown } from 'react-icons/gr'
import { MdOutlineAccountBalanceWallet, MdSupport } from 'react-icons/md'
import { RiTableAltLine } from 'react-icons/ri'
import { Link, useLocation } from 'react-router-dom'
import useModal from '../../../hooks/useModals'
import pb from '../../../lib/pb'
import { useMediaQuery } from '@mantine/hooks'
import useAuth from '../../../hooks/useAuth'

export const styles = {
  profileMenuLink: 'flex items-center gap-x-6 cursor-pointer',
  icon: 'text-xl text-pink-500 hover:text-black transition-all duration-200'
}

function UserMenu() {

  const { openModal } = useModal()
  const { logged } = useAuth()

  const [profile, setProfile] = React.useState(false)

  const matches = useMediaQuery('(min-width: 768px)')
  
  let location = useLocation().pathname

  React.useEffect(() => {
    setProfile(false)
  }, [location])

  if (logged) {
    return (
      <>
        {matches ?
          <Menu
            trigger='hover'
            position='bottom-end'
            transitionProps={{
              transition: 'fade',
              duration: 200,
            }}
          >
            <Menu.Target>
              <Button
                component={Link}
                to='/profile'
                size='sm'
                variant='subtle'
                compact
              >
                Профиль
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
                component={Link}
                to='/profile/projects'
              >
                <p className={styles.profileMenuLink}>
                  <RiTableAltLine className={`${styles.icon} text-pink-500`} />
                  <span>
                    Созданные проекты
                  </span>
                </p>
              </Menu.Item>
              <Menu.Item
                component={Link}
                to='/profile/supports'
              >
                <p className={styles.profileMenuLink}>
                  <MdSupport className={styles.icon} />
                  <span>
                    Поддержанные проекты
                  </span>
                </p>
              </Menu.Item>
              <Menu.Item
                component={Link}
                to='/profile/investions'
              >
                <p className={styles.profileMenuLink}>
                  <BiData className={styles.icon} />
                  <span>
                    Мои заказы
                  </span>
                </p>
              </Menu.Item>
              <Menu.Item
                component={Link}
                to='/profile/bill'
              >
                <p className={styles.profileMenuLink}>
                  <MdOutlineAccountBalanceWallet className={styles.icon} />
                  <span>
                    Баланс
                  </span>
                </p>
              </Menu.Item>
              <Menu.Item
                component={Link}
                to='/profile/settings'
              >
                <p className={styles.profileMenuLink}>
                  <FiSettings className={styles.icon} />
                  <span>
                    Настройки
                  </span>
                </p>
              </Menu.Item>
              <Menu.Item
                onClick={() => pb.authStore.clear()}
              >
                <p className={styles.profileMenuLink}>
                  <GrPowerShutdown className={styles.icon} />
                  <span> 
                    Выход
                  </span>
                </p>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        : (        
          <Button 
            onClick={() => setProfile(true)}
            size='sm'
            variant='subtle'
          >
            Профиль
          </Button>
        )}
        <Drawer
          opened={profile}
          onClose={() => setProfile(false)}
          position='right'
          size='280px'
          padding='md'
        >
          <div className='flex flex-col gap-y-5 text-sm'>
            <Button
              component={Link}
              to='/profile'
              size='sm'
              variant='subtle'
              compact
            >
              Профиль
            </Button>
            <Link
              to='/profile/projects'
              className={`${styles.profileMenuLink} font-medium tracking-wide`}
            >
              <RiTableAltLine className={`${styles.icon} text-pink-500`} />
              <span>
                Созданные проекты
              </span>
            </Link>

            <Link
              to='/profile/supports'
              className={`${styles.profileMenuLink} font-medium tracking-wide`}
            >
              <MdSupport className={styles.icon} />
              <span>
                Поддержанные проекты
              </span>
            </Link>

            <Link
              to='/profile/investions'
              className={`${styles.profileMenuLink} font-medium tracking-wide`}
            >
              <BiData className={styles.icon} />
              <span>
                Мои заказы
              </span>
            </Link>

            <Link
              className={`${styles.profileMenuLink} font-medium tracking-wide`}
              to='/profile/bill'
            >
              <MdOutlineAccountBalanceWallet className={styles.icon} />
              <span>
                Баланс
              </span>
            </Link>
            <Link
              to='/profile/settings'
              className={`${styles.profileMenuLink} font-medium tracking-wide`}>
              <FiSettings className={styles.icon} />
              <span>
                Настройки
              </span>
            </Link>
            <p
              className={`${styles.profileMenuLink} font-medium tracking-wide`}>
              <GrPowerShutdown className={styles.icon} />
              <span>
                Выход
              </span>
            </p>
          </div>
        </Drawer>
      </>
    )
  }

  return (
    <Button
      compact
      size='sm'
      variant='subtle'
      onClick={() => openModal.auth()}
    >
      Вход
    </Button>
  )
}

export default UserMenu
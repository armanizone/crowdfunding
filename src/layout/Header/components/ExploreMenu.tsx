import React from 'react'
import { Button, Menu } from '@mantine/core'
import { Link }  from 'react-router-dom'

export const styles = {
  nav: 'hidden md:flex items-center gap-x-4 lg:gap-x-8',
  divider: 'border-l border-slate-100 h-8',
  menu: 'flex flex-col px-4 text-sm whitespace-nowrap divide-y divide-solid',
  menuLink: 'light-link',
  profileMenuLink: 'flex items-center gap-x-6 cursor-pointer',
  icon: 'text-xl text-pink-500 hover:text-black transition-all duration-200'
}

function ExploreMenu() {
  return (
    <Menu
      trigger='hover'
      position='bottom-start'
      transitionProps={{
        transition: 'fade',
        duration: 200
      }}
      zIndex={9999}
    >
      <Menu.Target>
        <Button
          unstyled
          className='light-link'
          component={Link}
          to='/explore'
        >
          Проекты
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          component={Link}
          to='/explore/collection/recent'
        >
          <span className={styles.menuLink}>
            Последние обновленные
          </span>
        </Menu.Item>
        <Menu.Item
          component={Link}
          to='/explore/collection/new'
        >
          <span className={styles.menuLink} >
            Новые
          </span>
        </Menu.Item>
        <Menu.Item
          component={Link}
          to='/explore/collection/active'
        >
          <span className={styles.menuLink}>
            Активные
          </span>
        </Menu.Item>
        <Menu.Item
          component={Link}
          to='/explore/collection/discussed'
        >
          <span className={styles.menuLink}>
            Обсуждаемые
          </span>
        </Menu.Item>
        <Menu.Item
          component={Link}
          to='/explore/collection/soonend'
        >
          <span className={styles.menuLink}>
            Близкие к завершению
          </span>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

export default ExploreMenu
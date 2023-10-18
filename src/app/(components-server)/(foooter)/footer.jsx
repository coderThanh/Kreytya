import classNames from 'classnames'
import styles from './footer.module.scss'
import AppLink from '@/components/link'
import { demoMapLinks, demoSocial } from '@/demo/footer'

export const Footer = () => {
  return (
    <>
      <footer className={classNames(styles.wrap)}>
        <div className={classNames('container-lg')}>
          <div className={classNames('row row-gap-y')}>
            <div className={classNames('col-12 col-md-3', styles.colBottom)}>
              <h4 className={classNames(styles.title)}>Company</h4>
              {demoMapLinks?.map((item, index) => (
                <AppLink
                  className={classNames(styles.link)}
                  key={index}
                  url={item.link}
                >
                  {item.title}
                </AppLink>
              ))}
            </div>
            <div className={classNames('col-12 col-md-3', styles.colBottom)}>
              <h4 className={classNames(styles.title)}>Social Media</h4>
              {demoSocial?.map((item, index) => (
                <AppLink
                  className={classNames(styles.link)}
                  key={index}
                  url={item.link}
                >
                  {item.title}
                </AppLink>
              ))}
            </div>
            <div className={classNames('col-12 col-md-3', styles.colBottom)}>
              <h4 className={classNames(styles.title)}>Get it touch</h4>
              <AppLink className={classNames(styles.link)} url={'#'}>
                demoemail@gmail.com
              </AppLink>
              <p>All Rights Reserved</p>
            </div>
            <div
              className={classNames(
                'col-12 col-md-3 text-align-right',
                styles.copyRight,
                styles.colBottom,
              )}
            >
              <p>©SagoTech 2022</p>
              <p>All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

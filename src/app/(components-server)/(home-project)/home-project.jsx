import AppButton from '@/components/button'
import { CardProject } from '@/components/card-project/card-project'
import AppMaterialIcon from '@/components/material-icon'
import { UITitle } from '@/components/title/title'
import {
  AppButtonColor,
  AppButtonKind,
  AppMaterialIconType,
} from '@/consts/type'
import { demProjects } from '@/demo/project'
import classNames from 'classnames'

export const HomeProject = () => {
  return (
    <>
      <section>
        <div className={classNames('container-lg')}>
          <UITitle
            sup={'Our Work'}
            title={'Our Latest Projects'}
            className={classNames('text-center')}
          />
          <div className={classNames('mb-50')}></div>
          {demProjects?.length > 0 ? (
            <div className={classNames('row row-gap-y')}>
              {demProjects.slice(0, 4).map((item, index) => (
                <>
                  <div className={classNames('col-12 col-sm-6')} key={index}>
                    <CardProject
                      title={item.title}
                      desc={item.desc}
                      imgSrc={item.img}
                      link={item.link}
                      delay={0.15 * index}
                    />
                    <div className={classNames('mb-20')}></div>
                  </div>
                </>
              ))}
            </div>
          ) : (
            <></>
          )}
          <div className={classNames('d-flex justify-content-center mt-25')}>
            <AppButton
              color={AppButtonColor.primary}
              kind={AppButtonKind.default}
              url={'#'}
            >
              <span style={{ padding: '5px 15px' }}>
                <AppMaterialIcon type={AppMaterialIconType.outlined}>
                  folder
                </AppMaterialIcon>{' '}
                View Our Prjects
              </span>
            </AppButton>
          </div>
        </div>
      </section>
    </>
  )
}

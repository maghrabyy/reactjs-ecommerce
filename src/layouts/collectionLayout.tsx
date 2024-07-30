import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useOutlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { CollectionsPage } from '../pages/CollectionsPage';
import { Fragment } from 'react/jsx-runtime';

export const CollectionLayout = () => {
  const location = useLocation().pathname;
  const outlet = useOutlet();
  const prevPath = location.substring(0, location.lastIndexOf('/'));
  const pathList = location.substring(1).split('/');
  return (
    <div className="collections-layout section">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {pathList.map((path, index) => {
            const pathName =
              path.substring(0, 1).toUpperCase() +
              path.substring(1).replace('-', ' ');
            if (index === pathList.length - 1) {
              return (
                <BreadcrumbItem key={path}>
                  <BreadcrumbPage>{pathName}</BreadcrumbPage>
                </BreadcrumbItem>
              );
            } else {
              return (
                <Fragment key={path}>
                  <BreadcrumbItem>
                    <BreadcrumbLink href={prevPath}>
                      {pathName === 'Collections' ? 'Categories' : pathName}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </Fragment>
              );
            }
          })}
        </BreadcrumbList>
      </Breadcrumb>
      {outlet || <CollectionsPage />}
    </div>
  );
};

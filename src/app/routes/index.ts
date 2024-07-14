import { Router } from 'express';
import { UserRoutes } from '../../modules/user/user.routes';
import { NormalUserRouter } from '../../modules/normalUser/nomalUser.route';

const router = Router();

const moduleRoutes = [
    {
        path: '/users',
        route: UserRoutes,
    },
    {
        path: '/newUser',
        route: NormalUserRouter,
    },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;

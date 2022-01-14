//router.delete(routers.USERS, wrap(usersController.deleteUsers))

router.get(routers.HEALTH, wrap(async (req, res) => {
    res.status(OK).json({ message: 'OK' })
}));
router.get("/test_users_ci", wrap(async (req, res) => {
    res.status(OK).json({ message: 'THis a test for users ci' })
}));

module.exports = router;
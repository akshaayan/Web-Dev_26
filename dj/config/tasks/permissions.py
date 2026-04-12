from rest_framework.permissions import BasePermission, SAFE_METHODS


class IsOwnerOrReadOnlyForManager(BasePermission):
    """
    - Owner can read/update/delete own task
    - Managers can read all tasks
    - Others cannot access чужие tasks
    """

    def has_object_permission(self, request, view, obj):
        user = request.user

        # Admins can do everything
        if user.is_staff or user.is_superuser:
            return True

        # Managers can only read
        if user.groups.filter(name="Managers").exists():
            return request.method in SAFE_METHODS

        # Regular users only on their own objects
        return obj.owner == user
# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class GroceryappContactform(models.Model):
    fullname = models.CharField(max_length=100)
    email = models.CharField(max_length=254)
    contact = models.CharField(max_length=50)
    message = models.CharField(max_length=200)

    class Meta:
        managed = False
        db_table = 'GroceryApp_contactform'


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)
    name = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.BooleanField()
    username = models.CharField(unique=True, max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.BooleanField()
    is_active = models.BooleanField()
    date_joined = models.DateTimeField()
    first_name = models.CharField(max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class AuthtokenToken(models.Model):
    key = models.CharField(primary_key=True, max_length=40)
    created = models.DateTimeField()
    user = models.OneToOneField(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'authtoken_token'


class CartsCart(models.Model):
    ordered = models.BooleanField()
    total_price = models.FloatField()
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'carts_cart'


class CartsCartitems(models.Model):
    price = models.FloatField()
    quantity = models.IntegerField()
    cart = models.ForeignKey(CartsCart, models.DO_NOTHING)
    product = models.ForeignKey('ProductsProduct', models.DO_NOTHING)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'carts_cartitems'


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    action_flag = models.PositiveSmallIntegerField()

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoRestPasswordresetResetpasswordtoken(models.Model):
    created_at = models.DateTimeField()
    key = models.CharField(unique=True, max_length=64)
    user_agent = models.CharField(max_length=256)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    ip_address = models.CharField(max_length=39, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'django_rest_passwordreset_resetpasswordtoken'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class OrderOrder(models.Model):
    order_id = models.AutoField(primary_key=True)
    amount = models.IntegerField()
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=100)
    address = models.CharField(max_length=150)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    zip_code = models.CharField(max_length=10)
    phone = models.CharField(max_length=15)
    itemsjson = models.CharField(db_column='itemsJson', max_length=5000)  # Field name made lowercase.
    itemsquntjson = models.CharField(db_column='itemsQuntJson', max_length=500)  # Field name made lowercase.
    user_id = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'order_order'


class OrderOrderupdate(models.Model):
    update_id = models.AutoField(primary_key=True)
    order_id = models.IntegerField()
    user_id = models.ForeignKey(AuthUser, models.DO_NOTHING)
    time = models.DateTimeField()
    status = models.CharField(max_length=500)

    class Meta:
        managed = False
        db_table = 'order_orderupdate'


class ProductsCategory(models.Model):
    category_id = models.AutoField(primary_key=True)
    category_name = models.CharField(max_length=50)

    class Meta:
        managed = False
        db_table = 'products_category'


class ProductsProduct(models.Model):
    product_id = models.AutoField(primary_key=True)
    product_name = models.CharField(max_length=50)
    description = models.TextField()
    price = models.FloatField()
    category = models.ForeignKey(ProductsCategory, models.DO_NOTHING)
    discount_price = models.FloatField()
    quantity = models.CharField(max_length=25)
    stockalert = models.ForeignKey('ProductsStockalert', models.DO_NOTHING)
    subcategory = models.ForeignKey('ProductsSubcategory', models.DO_NOTHING)
    image = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'products_product'


class ProductsStockalert(models.Model):
    stockalert_id = models.AutoField(primary_key=True)
    stockalert_name = models.CharField(max_length=25)

    class Meta:
        managed = False
        db_table = 'products_stockalert'


class ProductsSubcategory(models.Model):
    subcategory_id = models.AutoField(db_column='subCategory_id', primary_key=True)  # Field name made lowercase.
    subcategory_name = models.CharField(db_column='subCategory_name', max_length=50)  # Field name made lowercase.
    category_id = models.ForeignKey(ProductsCategory, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'products_subcategory'
